import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_4, '4.jpg')}
  </div>
`

export const AULA_4 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74645545, 7.06894939
        ],
        [
          -73.74632671, 7.06894141
        ],
        [
          -73.74633073, 7.0688336
        ],
        [
          -73.7464635, 7.06884425
        ],
        [
          -73.74645545, 7.06894939
        ]
      ]
    ]
  },
  id: 'cce16198-3705-431d-8887-c93c8dfa9819',
  properties: {
    name: 'Aula 4',
    category: 'Aula',
    html: HTML
  }
}
