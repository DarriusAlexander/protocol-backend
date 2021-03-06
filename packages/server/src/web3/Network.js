import Environment from '@aragon/protocol-backend-shared/models/environments/LocalEnvironment'

const Network = {
  get environment() {
    return new Environment()
  },

  async getProtocol() {
    return this.environment.getProtocol()
  },

  async query(query) {
    return this.environment.query(query)
  },
}

export default Network
