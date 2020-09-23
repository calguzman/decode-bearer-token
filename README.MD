# Decode Bearer Token

This Package remove the Keyword "Bearer "eyJhbGciOiJI....for an Bearer Token.

Example Token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZGNkx5dmdNbHQwdGVYcnc1MX'

Return: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZGNkx5dmdNbHQwdGVYcnc1MX'

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install decode-bearer-token.

```bash
npm install decode-bearer-token
```

## Usage

```python
const decode = require('decode-bearer-token);
const bearerToken ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZGNkx5dmdNbHQwdGVYcnc1MX';
const token = decode(bearerToken);
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)