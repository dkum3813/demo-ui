const useNockBack = (url) => {
    return !(
        url.pathname === 'some url to not use nock' ||
        url.pathname === 'some other url to not use nock'
    );
}

const getNockBackJsonPath = (url) => {
    return url.pathname + '/response.json';
}

module.exports = {
    useNockBack,
    getNockBackJsonPath
}
