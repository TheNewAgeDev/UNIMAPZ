import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_3, '3.jpg')}
  </div>
`

export const AULA_3 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74644473, 7.06908115
        ],
        [
          -73.74631464, 7.06907583
        ],
        [
          -73.74631732, 7.06895871
        ],
        [
          -73.74645009, 7.06896936
        ],
        [
          -73.74644473, 7.06908115
        ]
      ]
    ]
  },
  id: '3eeef8a2-c190-4894-9ae4-c45cd3df0c26',
  properties: {
    name: 'Aula 3',
    category: 'Aula',
    html: HTML
  }
}
