import gql from 'graphql-tag';

const Query = (name) => {
    let obj = {
        select(keys) {
            this.keys = keys.join(' ');
            return this;
        },

        retrieve() {
            let query = `
                query {
                    ${name} {
                        ${this.keys}
                    }
                }
            `;
            let response = gql`${query}`;

            return response;
        }
    };

    return obj;
}

export {Query};
