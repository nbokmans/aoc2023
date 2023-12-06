export const fetchData = async (day: number) => {
    const sessionCookie = process.env.AOC_SESSION_COOKIE;

    if (!sessionCookie) {
        return;
    }

    const url = `https://adventofcode.com/2023/day/${day}/input`;

    const response = await fetch(url, {
        headers: {
            "cookie": sessionCookie
        }
    });

    const data = await response.text();
    return data;
}