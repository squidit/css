// Global Variables or functions here

const colors = [
  'neutral',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'aqua',
  'blue',
  'lilac',
  'instagram',
  'youtube',
  'pinterest',
  'google',
  'whatsapp',
  'twitter',
  'linkedin',
  'facebook',
  'x',
  'tiktok',
  'twitch'
]

const tokenRoles = [
  {
    name: 'neutral',
    color: 'neutral',
    description: 'Usado como padrão para textos e elementos de interface secundários.'
  },
  {
    name: 'brand',
    color: 'pink',
    description: 'Usado para ações primárias e elementos que reforcem a comunicação da marca Squid.'
  },
  {
    name: 'information',
    color: 'blue',
    description: 'Usado para elementos da interface que apresentem um caráter informativo atribuído a eles.'
  },
  {
    name: 'discovery',
    color: 'purple',
    description: 'Usado para elementos da interface que comuniquem algo novo, como um onboarding ou informações de uma nova feature.'
  },
  {
    name: 'success',
    color: 'green',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'warning',
    color: 'yellow',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'danger',
    color: 'red',
    description: 'Faltando adicionar a descrição da cor.'
  },
  {
    name: 'highlight',
    color: 'aqua',
    description: 'Usado para cores que não tenham nenhum significado específico vinculado a elas. Você poderá trocar uma cor de destaque por outra e a experiência permanecerá inalterada.'
  }
];

const tokens = [
  textIcon = [
    neutral = [
      '--color_text-icon_neutral_primary',
      '--color_text-icon_neutral_secondary',
      '--color_text-icon_neutral_tertiary',
      '--color_text-icon_neutral_disabled',
      '--color_text-icon_neutral_inverse',
      '--color_text-icon_neutral_placeholder'
    ],
    brand = [
      '--color_text-icon_brands_wake',
      '--color_text-icon_brands_squid'
    ],
    system = [
      '--color_text-icon_system_danger',
      '--color_text-icon_system_warning',
      '--color_text-icon_system_success',
      '--color_text-icon_system_information',
      '--color_text-icon_system_discovery'
    ],
    universal = [
      '--color_text-icon_universal_black_primary',
      '--color_text-icon_universal_black_secondary',
      '--color_text-icon_universal_black_tertiary',
      '--color_text-icon_universal_black_disabled',
      '--color_text-icon_universal_white_primary',
      '--color_text-icon_universal_white_secondary',
      '--color_text-icon_universal_white_tertiary',
      '--color_text-icon_universal_white_disabled',
      '--color_text-icon_universal_brand_wake',
      '--color_text-icon_universal_brand_squid'
    ],
    hightlight = [
      '--color_text-icon_highlight_orange',
      '--color_text-icon_highlight_aqua'
    ],
    social = [
      '--color_text-icon_social_instagram',
      '--color_text-icon_social_youtube',
      '--color_text-icon_social_pinterest',
      '--color_text-icon_social_google',
      '--color_text-icon_social_whatsapp',
      '--color_text-icon_social_twitter',
      '--color_text-icon_social_linkedin',
      '--color_text-icon_social_facebook',
      '--color_text-icon_social_twitch',
      '--color_text-icon_social_tiktok',
      '--color_text-icon_social_x'
    ],
    link = [
      '--color_text-icon_link'
    ]
  ],
  bg = [
    box = [
      neutral = [
        '--color_bg_box_neutral_primary',
        '--color_bg_box_neutral_primary_hover',
        '--color_bg_box_neutral_primary_inverse',
        '--color_bg_box_neutral_primary_inverse-hover',
        '--color_bg_box_neutral_secondary',
        '--color_bg_box_neutral_secondary_hover',
        '--color_bg_box_neutral_secondary_inverse',
        '--color_bg_box_neutral_secondary_inverse-hover',
        '--color_bg_box_neutral_disabled'
      ],
      brand = [
        '--color_bg_box_brands_wake',
        '--color_bg_box_brands_wake_hover',
        '--color_bg_box_brands_squid',
        '--color_bg_box_brands_squid_hover'
      ],
      system = [
        '--color_bg_box_system_danger',
        '--color_bg_box_system_danger_hover',
        '--color_bg_box_system_warning',
        '--color_bg_box_system_warning_hover',
        '--color_bg_box_system_success',
        '--color_bg_box_system_success_hover',
        '--color_bg_box_system_information',
        '--color_bg_box_system_information_hover',
        '--color_bg_box_system_discovery',
        '--color_bg_box_system_discovery_hover'
      ],
      hightlight = [
        '--color_bg_box_highlight_orange',
        '--color_bg_box_highlight_orange_hover',
        '--color_bg_box_highlight_aqua',
        '--color_bg_box_highlight_aqua_hover'
      ],
      social = [
        '--color_bg_box_social_instagram',
        '--color_bg_box_social_instagram_hover',
        '--color_bg_box_social_youtube',
        '--color_bg_box_social_youtube_hover',
        '--color_bg_box_social_pinterest',
        '--color_bg_box_social_pinterest_hover',
        '--color_bg_box_social_google',
        '--color_bg_box_social_google_hover',
        '--color_bg_box_social_whatsapp',
        '--color_bg_box_social_whatsapp_hover',
        '--color_bg_box_social_twitter',
        '--color_bg_box_social_twitter_hover',
        '--color_bg_box_social_linkedin',
        '--color_bg_box_social_linkedin_hover',
        '--color_bg_box_social_facebook',
        '--color_bg_box_social_facebook_hover',
        '--color_bg_box_social_twitch',
        '--color_bg_box_social_twitch_hover',
        '--color_bg_box_social_tiktok',
        '--color_bg_box_social_tiktok_hover',
        '--color_bg_box_social_x',
        '--color_bg_box_social_x_hover'
      ]
    ],
    button = [
      neutral = [
        '--color_bg_button',
        '--color_bg_button_hover',
        '--color_bg_button_inverse',
        '--color_bg_button_inverse-hover',
        '--color_bg_button_disabled'
      ],
      brand = [
        '--color_bg_button_brands_wake',
        '--color_bg_button_brands_wake_hover',
        '--color_bg_button_brands_wake_inverse-hover',
        '--color_bg_button_brands_squid',
        '--color_bg_button_brands_squid_hover',
        '--color_bg_button_brands_squid_inverse-hover'
      ],
      system = [
        '--color_bg_button_system_danger',
        '--color_bg_button_system_danger_hover',
        '--color_bg_button_system_danger_inverse-hover',
        '--color_bg_button_system_warning',
        '--color_bg_button_system_warning_hover',
        '--color_bg_button_system_warning_inverse-hover',
        '--color_bg_button_system_success',
        '--color_bg_button_system_success_hover',
        '--color_bg_button_system_success_inverse-hover',
        '--color_bg_button_system_information',
        '--color_bg_button_system_information_hover',
        '--color_bg_button_system_information_inverse-hover',
        '--color_bg_button_system_discovery',
        '--color_bg_button_system_discovery_hover',
        '--color_bg_button_system_discovery_inverse-hover'
      ],
      hightlight = [
        '--color_bg_button_highlight_orange',
        '--color_bg_button_highlight_orange_hover',
        '--color_bg_button_highlight_orange_inverse-hover',
        '--color_bg_button_highlight_aqua',
        '--color_bg_button_highlight_aqua_hover',
        '--color_bg_button_highlight_aqua_inverse-hover'
      ],
      social = [
        '--color_bg_button_social_instagram',
        '--color_bg_button_social_instagram_hover',
        '--color_bg_button_social_instagram_inverse-hover',
        '--color_bg_button_social_youtube',
        '--color_bg_button_social_youtube_hover',
        '--color_bg_button_social_youtube_inverse-hover',
        '--color_bg_button_social_pinterest',
        '--color_bg_button_social_pinterest_hover',
        '--color_bg_button_social_pinterest_inverse-hover',
        '--color_bg_button_social_google',
        '--color_bg_button_social_google_hover',
        '--color_bg_button_social_google_inverse-hover',
        '--color_bg_button_social_whatsapp',
        '--color_bg_button_social_whatsapp_hover',
        '--color_bg_button_social_whatsapp_inverse-hover',
        '--color_bg_button_social_twitter',
        '--color_bg_button_social_twitter_hover',
        '--color_bg_button_social_twitter_inverse-hover',
        '--color_bg_button_social_linkedin',
        '--color_bg_button_social_linkedin_hover',
        '--color_bg_button_social_linkedin_inverse-hover',
        '--color_bg_button_social_facebook',
        '--color_bg_button_social_facebook_hover',
        '--color_bg_button_social_facebook_inverse-hover',
        '--color_bg_button_social_twitch',
        '--color_bg_button_social_twitch_hover',
        '--color_bg_button_social_twitch_inverse-hover',
        '--color_bg_button_social_tiktok',
        '--color_bg_button_social_tiktok_hover',
        '--color_bg_button_social_tiktok_inverse-hover',
        '--color_bg_button_social_x',
        '--color_bg_button_social_x_hover',
        '--color_bg_button_social_x_inverse-hover'
      ]
    ],
    input = [
      '--color_bg_input',
      '--color_bg_input_disabled'
    ]
  ],
  border = [
    box = [
      neutral = [
        '--color_border_box_neutral_primary',
        '--color_border_box_neutral_secondary',
        '--color_border_box_neutral_disabled'
      ],
      brand = [
        '--color_border_box_brands_wake',
        '--color_border_box_brands_squid'
      ],
      system = [
        '--color_border_box_system_danger',
        '--color_border_box_system_warning',
        '--color_border_box_system_success',
        '--color_border_box_system_information',
        '--color_border_box_system_discovery'
      ],
      hightlight = [
        '--color_border_box_highlight_orange',
        '--color_border_box_highlight_aqua'
      ],
      social = [
        '--color_border_box_social_instagram',
        '--color_border_box_social_youtube',
        '--color_border_box_social_pinterest',
        '--color_border_box_social_google',
        '--color_border_box_social_whatsapp',
        '--color_border_box_social_twitter',
        '--color_border_box_social_linkedin',
        '--color_border_box_social_facebook',
        '--color_border_box_social_twitch',
        '--color_border_box_social_tiktok',
        '--color_border_box_social_x'
      ]
    ],
    button = [
      neutral = [
        '--color_border_button_neutral'
      ],
      brand = [
        '--color_border_button_brands_wake',
        '--color_border_button_brands_squid'
      ],
      system = [
        '--color_border_button_system_danger',
        '--color_border_button_system_warning',
        '--color_border_button_system_success',
        '--color_border_button_system_information',
        '--color_border_button_system_discovery'
      ],
      hightlight = [
        '--color_border_button_highlight_orange',
        '--color_border_button_highlight_aqua'
      ],
      social = [
        '--color_border_button_social_instagram',
        '--color_border_button_social_youtube',
        '--color_border_button_social_pinterest',
        '--color_border_button_social_google',
        '--color_border_button_social_whatsapp',
        '--color_border_button_social_twitter',
        '--color_border_button_social_linkedin',
        '--color_border_button_social_facebook',
        '--color_border_button_social_twitch',
        '--color_border_button_social_tiktok',
        '--color_border_button_social_x'
      ]
    ],
    input = [
      '--color_border_input',
      '--color_border_input_hover',
      '--color_border_input_focus',
      '--color_border_input_disabled',
      '--color_border_input_error',
      '--color_border_input_success'
    ]
  ],
  surface = [
    '--color_surface_primary',
    '--color_surface_secondary',
    '--color_surface_tertiary',
    '--color_surface_primary_inverse',
    '--color_surface_secondary_inverse',
    '--color_surface_tertiary_inverse'
  ]
]

const tokensMap = {
  0: {
    name: 'Text Icon',
    maps: {
      0: 'neutral',
      1: 'brand',
      2: 'system',
      3: 'universal',
      4: 'highlight',
      5: 'social',
      6: 'link'
    }
  },
  1: {
    name: 'Background',
    maps: {
      0: {
        name: 'Box',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      1: {
        name: 'Button',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      2: {
        name: 'Input'
      }
    }
  },
  2: {
    name: 'Border',
    maps: {
      0: {
        name: 'Box',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      1: {
        name: 'Button',
        maps: {
          0: 'neutral',
          1: 'brand',
          2: 'system',
          3: 'highlight',
          4: 'social'
        }
      },
      2: {
        name: 'Input'
      }
    }
  },
  3: 'Surface'
}

const buttons = [
  'neutral',
  'wake',
  'squid',
  'danger',
  'warning',
  'success',
  'information',
  'discovery',
  'orange',
  'aqua',
  'instagram',
  'youtube',
  'pinterest',
  'google',
  'whatsapp',
  'twitter',
  'linkedin',
  'facebook',
  'x',
  'tiktok',
  'disabled',
  'rounded'
]

const buttonSizes = [
  { text: 'Small', value: 'sm' },
  { text: 'Medium/Default', value: '' },
  { text: 'Big', value: 'lg' },
  { text: 'Extra Large', value: 'xl' }
]
