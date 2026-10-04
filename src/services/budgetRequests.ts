import pb from '@/lib/pocketbase/client'

export const BUDGET_SERVICES = [
  'Perícia Judicial',
  'Assistência Técnica',
  'Cálculos',
  'Consultoria',
  'Tecnologia & IA',
  'Outro',
] as const

export type BudgetServiceType = (typeof BUDGET_SERVICES)[number]

export const BUDGET_ORIGINS = ['Google', 'Instagram', 'Indicação', 'Outro'] as const

export type BudgetOriginType = (typeof BUDGET_ORIGINS)[number]

export interface BudgetRequestData {
  nome: string
  email: string
  telefone: string
  servico: BudgetServiceType
  origem?: BudgetOriginType | ''
  descricao: string
  consentimento: boolean
}

export interface BudgetRequestRecord extends BudgetRequestData {
  id: string
  created: string
  updated: string
}

/**
 * Cria uma nova solicitação de orçamento detalhado na collection `budget_requests`.
 */
export async function createBudgetRequest(data: BudgetRequestData): Promise<BudgetRequestRecord> {
  const payload: Record<string, unknown> = {
    nome: data.nome.trim(),
    email: data.email.trim(),
    telefone: data.telefone.trim(),
    servico: data.servico,
    descricao: data.descricao.trim(),
    consentimento: data.consentimento,
  }

  if (data.origem) {
    payload.origem = data.origem
  }

  const record = await pb.collection('budget_requests').create<BudgetRequestRecord>(payload)
  return record
}
