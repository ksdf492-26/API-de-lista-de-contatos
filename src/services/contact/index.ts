import { readFile, writeFile } from "fs/promises";
const dataSource = './data/list/index.txt';

export const getContact = async () => {
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, { encoding: 'utf8' });

        list = data.split('\n');
    } catch (err) {

        console.error('Erro ao ler o arquivo:', err);
    }
    return list ;
}
