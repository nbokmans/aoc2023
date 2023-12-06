import { fetchData } from '../../util/dataHelper';

const testData_P1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testData_P2 = `
`;

const testing = false;

const part_1 = async () => {
    const dataset = testing
        ? testData_P1
        : await fetchData(1);

    const data = dataset?.split('\n').filter(d => !!d);

    const filtered = data?.map((d, i) => {
        const value = d.replace(/\D/g, '');

        const [first, last] = [value?.[0], value?.[value.length - 1]]
        const parsed = parseInt(`${first}${last}`)

        return {
            value,
            first,
            last,
            parsed,
            label: `${d} => ${value} => ${first} & ${last} => ${parsed}`
        }
    });

    const totalSum = filtered?.reduce((total, current) => total += current.parsed, 0);
    console.log(totalSum);
}

const part_2 = async () => {

}

export default {
    part_1,
    part_2
}