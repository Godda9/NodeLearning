const REQ_TIMEOUT = 500;

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log('sending encrypted data...');
}

function encrypt(data) {
    return 'endcrypted data'
}

module.exports = {
    REQ_TIMEOUT,
    send: send,
}