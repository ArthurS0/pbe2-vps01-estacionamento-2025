const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.getAllEstadias = async (req, res) => {
  try {
    const estadias = await prisma.estadia.findMany()
    res.json(estadias)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estadias' })
  }
}

exports.getEstadiaById = async (req, res) => {
  const { id } = req.params
  try {
    const estadia = await prisma.estadia.findUnique({
      where: { id: parseInt(id) }
    })
    if (!estadia) return res.status(404).json({ error: 'Estadia não encontrada' })
    res.json(estadia)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar a estadia' })
  }
}

exports.createEstadia = async (req, res) => {
  const { veiculoId, valorHora } = req.body
  try {
    const estadia = await prisma.estadia.create({
      data: {
        veiculoId,
        valorHora,
        entrada: new Date(),
        valorTotal: null
      }
      })
    res.status(201).json(estadia)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar a estadia' })
  }
}

exports.updateEstadia = async (req, res) => {
  const { id } = req.params
  const { saida } = req.body
  try {
    const estadia = await prisma.estadia.findUnique({
      where: { id: parseInt(id) }
    })
    if (!estadia) return res.status(404).json({ error: 'Estadia não encontrada' })

    const entrada = estadia.entrada
    const valorHora = estadia.valorHora

    let valorTotal = null
    if (saida) {
      const horas = Math.ceil((new Date(saida) - entrada) / 3600000)
      valorTotal = horas * valorHora
    }

    const updatedEstadia = await prisma.estadia.update({
      where: { id: parseInt(id) },
      data: { saida: new Date(saida), valorTotal }
    })
    res.json(updatedEstadia)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a estadia' })
  }
}

exports.deleteEstadia = async (req, res) => {
  const { id } = req.params
  try {
    await prisma.estadia.delete({
      where: { id: parseInt(id) }
    })
    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a estadia' })
  }
}
