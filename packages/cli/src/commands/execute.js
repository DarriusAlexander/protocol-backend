const logger = require('@aragon/protocol-backend-shared/helpers/logger')('execute')

const command = 'execute'
const describe = 'Execute ruling for a dispute'

const builder = {
  dispute: { alias: 'd', describe: 'Dispute identification number', type: 'string', demand: true },
}

const handlerAsync = async (environment, { dispute }) => {
  const protocol = await environment.getProtocol()
  await protocol.execute(dispute)
  logger.success(`Executed final ruling of dispute #${dispute}`)
}

module.exports = {
  command,
  describe,
  builder,
  handlerAsync
}
