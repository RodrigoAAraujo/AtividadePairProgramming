import pkg from '@prisma/client'

const {PrismaClient} = pkg

const prismaConnection = new PrismaClient()

export default prismaConnection