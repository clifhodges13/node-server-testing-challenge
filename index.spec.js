const request = require("supertest")
const server = require("./index")
const db = require("./users/dbConfig")

beforeEach(async () => {
  await db.seed.run()
})

describe('index.js', () => {
  describe('GET / route', () => {
    it('should return status 200 OK', async () => {
      const res = await request(server).get('/')
      expect(res.status).toEqual(200)
    })

    it('should return a JSON body', async () => {
      const res = await request(server).get('/')
      expect(res.body).toEqual({ api: 'running' })
    })

    it('should return a body of type JSON', async () => {
      const res = await request(server).get('/')
      expect(res.type).toBe('application/json')
    })
  })

  describe('GET /users route', () => {
    it('should return status 200 OK', async () => {
      const res = await request(server).get('/users')
      expect(res.status).toEqual(200)
    })

    it('should return a body of type JSON', async () => {
      const res = await request(server).get('/users')
      expect(res.type).toBe('application/json')
    })

    it('should return an array with length of 5', async () => {
      const res = await request(server).get('/users')
      expect(res.body).toHaveLength(5)
    })
  })

  describe('POST /users route', () => {
    const testPayload = {
      username: "clifhodges12345",
      password: "passwurd",
      department: "development"
    }

    it('should return a status 201 OK', async () => {
      const res = await request(server).post('/users')
        .send(testPayload)
        expect(res.status).toBe(201)
    })

    it('should return the newly created user object', async () => {
      const res = await request(server).post('/users')
        .send(testPayload)
        expect(res.body).toEqual(expect.arrayContaining([{ ...testPayload, id: 6 }]))
    })
  })

  describe('/DEL /users/:id route', () => {
    it('should return a status 200', async () => {
      const res = await request(server).delete('/users/:id')
      console.log(res.status)
      expect(res.status).toBe(200)
    })

    it('should return a 1', async () => {
      const res = await request(server).delete('/users/5')
      expect(res.body).toBeGreaterThan(0)
    })
  })
})