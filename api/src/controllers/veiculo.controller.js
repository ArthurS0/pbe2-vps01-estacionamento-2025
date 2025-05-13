const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllVeiculos = async (req, res) => {
  try {
    const veiculos = await prisma.veiculo.findMany({
      include: { estadias: true }
    })
    res.json(veiculos)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículos' })
  }
}

exports.getVeiculoById = async (req, res) => {
  const { id } = req.params
  try {
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: parseInt(id) },
      include: { estadias: true }
    })
    if (!veiculo) return res.status(404).json({ error: 'Veículo não encontrado' })
    res.json(veiculo)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o veículo' })
  }
}

exports.createVeiculo = async (req, res) => {
  const { placa, modelo, cor, ano } = req.body
  try {
    const veiculo = await prisma.veiculo.create({
      data: { placa, modelo, cor, ano }
    })
    res.status(201).json(veiculo)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o veículo' })
  }
}

exports.updateVeiculo = async (req, res) => {
  const { id } = req.params
  const { placa, modelo, cor, ano } = req.body
  try {
    const veiculo = await prisma.veiculo.update({
      where: { id: parseInt(id) },
      data: { placa, modelo, cor, ano }
    })
    res.json(veiculo)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o veículo' })
  }
}

exports.deleteVeiculo = async (req, res) => {
  const { id } = req.params
  try {
    await prisma.veiculo.delete({
      where: { id: parseInt(id) }
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o veículo' })
  }
}
