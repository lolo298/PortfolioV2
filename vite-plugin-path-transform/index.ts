import { type Plugin as vitePlug } from 'vite';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz');
export default function pathTransform(): vitePlug {
	type configResolved = vitePlug['configResolved'];
	// @ts-expect-error nope
	type viteConfig = Parameters<configResolved>[0];
	let cfg: viteConfig;
	function escapeRegExp(string: string | RegExp): string {
		if (string instanceof RegExp) string = string.source;
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	}
	const regex = /"§(.+)§"/g;
	const scriptStartRegex = /(?<=<script.*?>)(\n)/g;
	return {
		name: 'vite-plugin-path-transform',
		enforce: 'pre',
		configResolved(config) {
			cfg = config;
		},
		transform(src, id) {
			const workspace = cfg.root + '/src';
			//check if the file is in the workspace
			if (id.startsWith(workspace)) {
				const toImport: { id: string; from: string }[] = [];
				let file = src.replace(regex, (match, p1) => {
					const importId = nanoid();
					for (const alias of cfg.resolve.alias) {
						//check if the alias is found in the file and replace it with the import variable
						if (
							(typeof alias.find === 'string' && new RegExp(escapeRegExp(alias.find)).test(p1)) ||
							(alias.find instanceof RegExp && alias.find.test(p1))
						) {
							toImport.push({ id: importId, from: p1 });
							return `{${importId}}`;
						}
					}
					return p1;
				});
				if (toImport.length > 0) {
					for (const { id, from } of toImport) {
						//add the import statement to the file
						file = file.replace(scriptStartRegex, () => {
							return `\n\timport ${id} from '${from}';\n`;
						});
					}
				}

				return file;
			}
		}
	};
}
