import { TSESLint } from '@typescript-eslint/utils';

const x: TSESLint.RuleModule<
any,
any
> =  {
    meta: {
        schema: [
            {
                type: 'object',
                properties: {
                  allowedTypeAnnotations: {
                    type: 'array',
                    items: { type: 'string' },
                    default: [],
                  },
                },
                additionalProperties: false,
              },
        ],
    },
    create(context) {
      return {};
    }
  }

  export default x;