migrate(
  (app) => {
    const collection = new Collection({
      name: 'budget_requests',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'telefone', type: 'text', required: true },
        {
          name: 'servico',
          type: 'select',
          required: true,
          maxSelect: 1,
          values: [
            'Perícia Judicial',
            'Assistência Técnica',
            'Cálculos',
            'Consultoria',
            'Tecnologia & IA',
            'Outro',
          ],
        },
        {
          name: 'origem',
          type: 'select',
          required: false,
          maxSelect: 1,
          values: ['Google', 'Instagram', 'Indicação', 'Outro'],
        },
        { name: 'descricao', type: 'text', required: true },
        { name: 'consentimento', type: 'bool', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_budget_requests_created ON budget_requests (created DESC)',
        'CREATE INDEX idx_budget_requests_servico ON budget_requests (servico)',
      ],
    })

    app.save(collection)
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('budget_requests')
      app.delete(collection)
    } catch (_) {}
  },
)
