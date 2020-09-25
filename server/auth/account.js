/**
 * @author Shannon Phu <shannon.phu@sjsu.edu>
 */

const Twitter = require('../config/twitter-config');

function getInfo() {
    return new Promise((resolve, reject) => {
        Twitter.get('account/verify_credentials', { skip_status: true })
               .then((result) => {
                    let userInfo = {
                        screen_name: result.data.screen_name
                    };
                    resolve(userInfo);
                })
                .catch((err) => {
                    console.log('caught error', err.stack)
                    reject(err)
                });
    });
}

module.exports = {
    getInfo
}