/**
 * Created by liujun on 2017/7/1.
 */
var UserSQL = {
    register: 'INSERT INTO User(userName, password) VALUES(?,?)',
    perfectInfo: 'UPDATE User SET password = ? WHERE id = ?',
    queryAll: 'SELECT * FROM User',
    getUserById: 'SELECT * FROM User WHERE id = ? '
};
module.exports = UserSQL;
