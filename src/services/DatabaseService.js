const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hackathon-total',
  password: 'postgres',
  port: 5432,
})

module.exports.find = function find(complexid) {
    return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * from complex inner join home on complex.id = home.complexid where complex.id = $1',
                [complexid], (error, results) => {
                if (error) return  reject(error)
                resolve(results.rows)
              })
    })
}