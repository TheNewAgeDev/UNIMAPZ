import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_17, '17.jpg')}
  </div>
`

export const AULA_17 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74572187, 7.06891479
        ],
        [
          -73.74559581, 7.06890814
        ],
        [
          -73.74559983, 7.06881364
        ],
        [
          -73.7457326, 7.06881763
        ],
        [
          -73.74572187, 7.06891479
        ]
      ]
    ]
  },
  id: 'e16bbb59-91d3-4bb4-9b1b-ecbfea391b5d',
  properties: {
    name: 'Aula 17',
    category: 'Aula',
    html: HTML
  }
}
