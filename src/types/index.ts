// Core types for OncoSwitch v2.0

export interface SequenceBlock {
  id: string
  type: 'promoter' | 'switch' | 'reporter' | 'terminator'
  name: string
  sequence: string
  color: string
  validated: boolean
  issues: number
  gcContent?: number
  length: number
}

export interface DNASwitch {
  id: string
  name: string
  version: string
  cellLines: string[]
  targetGenes: string[]
  activity: 'high' | 'medium' | 'low'
  validated: boolean
  downloads: number
  rating: number
  description: string
  sequence: string
  author: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  validationResults?: ValidationResult[]
}

export interface ValidationResult {
  type: 'gc_content' | 'secondary_structure' | 'restriction_sites' | 'homology'
  status: 'pass' | 'warning' | 'fail'
  message: string
  details?: Record<string, unknown>
}

export interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
  attachments?: Attachment[]
  actions?: Action[]
}

export interface Attachment {
  id: string
  type: 'sequence' | 'file' | 'image'
  name: string
  data: string
  size?: number
}

export interface Action {
  id: string
  type: 'analyze' | 'optimize' | 'export' | 'save'
  label: string
  payload?: Record<string, unknown>
}

export interface Experiment {
  id: string
  name: string
  status: 'planned' | 'in_progress' | 'completed' | 'failed' | 'paused'
  protocol: 'MPRA' | 'lentiMPRA' | 'qPCR' | 'RNA-seq'
  progress: number
  collaborators: string[]
  startDate: Date
  estimatedEnd: Date
  results?: ExperimentResults
  description?: string
  tags: string[]
}

export interface ExperimentResults {
  successRate: number
  activity: number
  data: Record<string, unknown>[]
  charts: ChartData[]
  notes?: string
}

export interface ChartData {
  type: 'line' | 'bar' | 'scatter' | 'pie'
  title: string
  data: Record<string, unknown>[]
  xAxis?: string
  yAxis?: string
}

export interface AnalyticsData {
  totalSequences: number
  activeExperiments: number
  successRate: number
  avgActivity: number
  trends: TrendData[]
  topPerformers: DNASwitch[]
  usagePatterns: UsagePattern[]
}

export interface TrendData {
  date: string
  sequences: number
  experiments: number
  successRate: number
}

export interface UsagePattern {
  feature: string
  usage: number
  trend: 'up' | 'down' | 'stable'
}

export interface User {
  id: string
  name: string
  email: string
  role: 'researcher' | 'admin' | 'viewer'
  avatar?: string
  organization?: string
  joinedAt: Date
}

export interface QuickPrompt {
  id: string
  label: string
  prompt: string
  category: 'design' | 'analysis' | 'optimization' | 'validation'
  icon: string
}

export interface SearchFilter {
  field: string
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in'
  value: unknown
}

export interface ExportOptions {
  format: 'fasta' | 'genbank' | 'json' | 'csv'
  includeMetadata: boolean
  includeValidation: boolean
  filename?: string
}
