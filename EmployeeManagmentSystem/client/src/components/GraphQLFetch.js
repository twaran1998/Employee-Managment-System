// Date Regex Expression
const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
// function to revive date from the json
function jsonDateReviver(key, value) {
    if (dateRegex.test(value)) return new Date(value);
    return value;
}

async function graphQLFetch(query, variables = {}) {
    try {
        const response = await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });

        const body = await response.text();
        const result = JSON.parse(body, jsonDateReviver);
        if (result.errors) {
            const error = result.errors[0];
            if (error.extensions.code === 'BAD_USER_INPUT') {
                const details = error.extensions.exception.errors.join('\n ');
                console.log(`${error.message}:\n ${details}`);
            } else {
                console.log(`${error.extensions.code}: ${error.message}`);
            }
        }
        return result.data;
    } catch (e) {
        console.log(`Error in sending data to server: ${e.message}`);
    }
}

export default graphQLFetch