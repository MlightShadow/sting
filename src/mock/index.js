import Mock from 'mockjs'
Mock.mock('http://127.0.0.1/200', 'post', () => {
    return {
        code: 200
    }
})