interface Atom {
  name: string;
  count: number;
}

export class Molecule {
  name: string;
  formula: string;
  weight: number;
  atoms: Atom[];
  isOrganic: boolean;
  state: 'solid' | 'liquid' | 'gas' | 'aqueous';

  constructor(
    name: string,
    formula: string,
    weight: number,
    atoms: Atom[],
    isOrganic: boolean,
    state: 'solid' | 'liquid' | 'gas' | 'aqueous',
  ) {
    this.name = name;
    this.formula = formula;
    this.weight = weight;
    this.atoms = atoms;
    this.isOrganic = isOrganic;
    this.state = state;
  }
}

export const molecules = [
  new Molecule('Dihydrogène', 'H_2', 2.016, [{ name: 'H', count: 2 }], false, 'gas'),
  new Molecule('Dioxygène', 'O_2', 32.0, [{ name: 'O', count: 2 }], false, 'gas'),
  new Molecule(
    'Eau',
    'H_2O',
    18.01528,
    [
      { name: 'H', count: 2 },
      { name: 'O', count: 1 },
    ],
    false,
    'liquid',
  ),
  new Molecule(
    'Méthane',
    'CH_4',
    16.04246,
    [
      { name: 'C', count: 1 },
      { name: 'H', count: 4 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Dioxyde de carbone',
    'CO_2',
    44.0095,
    [
      { name: 'C', count: 1 },
      { name: 'O', count: 2 },
    ],
    false,
    'gas',
  ),
  new Molecule(
    'Ammoniac',
    'NH_3',
    17.0306,
    [
      { name: 'N', count: 1 },
      { name: 'H', count: 3 },
    ],
    false,
    'gas',
  ),
  new Molecule(
    'Dioxyde de soufre',
    'SO_2',
    64.0638,
    [
      { name: 'S', count: 1 },
      { name: 'O', count: 2 },
    ],
    false,
    'gas',
  ),
  new Molecule(
    'Éthanol',
    'C_2H_5OH',
    46.069,
    [
      { name: 'C', count: 2 },
      { name: 'H', count: 6 },
      { name: 'O', count: 1 },
    ],
    true,
    'liquid',
  ),
  new Molecule(
    'Glucose',
    'C_6H_{12}O_6',
    180.156,
    [
      { name: 'C', count: 6 },
      { name: 'H', count: 12 },
      { name: 'O', count: 6 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Méthanol',
    'CH_3OH',
    32.042,
    [
      { name: 'C', count: 1 },
      { name: 'H', count: 4 },
      { name: 'O', count: 1 },
    ],
    true,
    'liquid',
  ),
  new Molecule(
    'Propane',
    'C_3H_8',
    44.096,
    [
      { name: 'C', count: 3 },
      { name: 'H', count: 8 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Butane',
    'C_4H_{10}',
    58.123,
    [
      { name: 'C', count: 4 },
      { name: 'H', count: 10 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Acide sulfurique',
    'H_2SO_4',
    98.079,
    [
      { name: 'H', count: 2 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'liquid',
  ),
  new Molecule(
    'Éthylène',
    'C_2H_4',
    28.054,
    [
      { name: 'C', count: 2 },
      { name: 'H', count: 4 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Propylène',
    'C_3H_6',
    42.081,
    [
      { name: 'C', count: 3 },
      { name: 'H', count: 6 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Benzène',
    'C_6H_6',
    78.114,
    [
      { name: 'C', count: 6 },
      { name: 'H', count: 6 },
    ],
    true,
    'liquid',
  ),
  new Molecule(
    'Ammonitrile',
    'CH_3CN',
    41.053,
    [
      { name: 'C', count: 1 },
      { name: 'H', count: 3 },
      { name: 'N', count: 1 },
    ],
    true,
    'liquid',
  ),
  new Molecule(
    'Méthanal',
    'CH_2O',
    30.026,
    [
      { name: 'C', count: 1 },
      { name: 'H', count: 2 },
      { name: 'O', count: 1 },
    ],
    true,
    'gas',
  ),
  new Molecule(
    'Méthanoate de sodium',
    'HCOONa',
    68.007,
    [
      { name: 'H', count: 1 },
      { name: 'C', count: 1 },
      { name: 'O', count: 2 },
      { name: 'Na', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Carbonate de calcium',
    'CaCO_3',
    100.086,
    [
      { name: 'C', count: 1 },
      { name: 'O', count: 3 },
      { name: 'Ca', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    "Sulfate d'ammonium",
    '(NH_4)_2SO_4',
    132.14,
    [
      { name: 'N', count: 2 },
      { name: 'H', count: 8 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Soude caustique',
    'NaOH',
    40.0,
    [
      { name: 'Na', count: 1 },
      { name: 'O', count: 1 },
      { name: 'H', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    "Nitrate d'ammonium",
    'NH_4NO_3',
    80.043,
    [
      { name: 'N', count: 1 },
      { name: 'H', count: 4 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Carbonate de sodium',
    'Na_2CO_3',
    105.988,
    [
      { name: 'Na', count: 2 },
      { name: 'C', count: 1 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Vitamine C',
    'C_6H_8O_6',
    176.124,
    [
      { name: 'C', count: 6 },
      { name: 'H', count: 8 },
      { name: 'O', count: 6 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Aspirine',
    'C_9H_8O_4',
    180.157,
    [
      { name: 'C', count: 9 },
      { name: 'H', count: 8 },
      { name: 'O', count: 4 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Caféine',
    'C_8H_{10}N_4O_2',
    194.19,
    [
      { name: 'C', count: 8 },
      { name: 'H', count: 10 },
      { name: 'N', count: 4 },
      { name: 'O', count: 2 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Paracétamol',
    'C_8H_9NO_2',
    151.165,
    [
      { name: 'C', count: 8 },
      { name: 'H', count: 9 },
      { name: 'N', count: 1 },
      { name: 'O', count: 2 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Chlorure de sodium',
    'NaCl',
    58.44,
    [
      { name: 'Na', count: 1 },
      { name: 'Cl', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Lactose',
    'C_{12}H_{22}O_{11}',
    342.297,
    [
      { name: 'C', count: 12 },
      { name: 'H', count: 22 },
      { name: 'O', count: 11 },
    ],
    true,
    'solid',
  ),
  new Molecule(
    'Acide acétique',
    'CH_3COOH',
    60.052,
    [
      { name: 'C', count: 2 },
      { name: 'H', count: 4 },
      { name: 'O', count: 2 },
    ],
    true,
    'liquid',
  ),
  new Molecule('Magnésium', 'Mg', 24.305, [{ name: 'Mg', count: 2 }], false, 'solid'),
  new Molecule(
    'Oxyde de magnésium',
    'MgO',
    40.304,
    [
      { name: 'Mg', count: 1 },
      { name: 'O', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule('Fer', 'Fe', 55.845, [{ name: 'Fe', count: 4 }], false, 'solid'),
  new Molecule(
    'Oxyde de fer(III)',
    'Fe_2O_3',
    159.6882,
    [
      { name: 'Fe', count: 2 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Acide chlorhydrique',
    'HCl',
    36.461,
    [
      { name: 'H', count: 1 },
      { name: 'Cl', count: 1 },
    ],
    false,
    'gas',
  ),
  new Molecule(
    'Hydroxyde de sodium',
    'NaOH',
    39.997,
    [
      { name: 'Na', count: 1 },
      { name: 'O', count: 1 },
      { name: 'H', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    "Nitrate d'argent",
    'AgNO_3',
    169.87,
    [
      { name: 'Ag', count: 1 },
      { name: 'N', count: 1 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    "Chlorure d'argent",
    'AgCl',
    143.32,
    [
      { name: 'Ag', count: 1 },
      { name: 'Cl', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Nitrate de sodium',
    'NaNO_3',
    84.9947,
    [
      { name: 'Na', count: 1 },
      { name: 'N', count: 1 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Hydroxyde de calcium',
    'Ca(OH)_2',
    74.093,
    [
      { name: 'Ca', count: 1 },
      { name: 'O', count: 2 },
      { name: 'H', count: 2 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Sulfate de calcium',
    'CaSO_4',
    136.14,
    [
      { name: 'Ca', count: 1 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Sulfate de cuivre',
    'CuSO_4',
    159.609,
    [
      { name: 'Cu', count: 1 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Hydroxyde de cuivre(II)',
    'Cu(OH)_2',
    97.561,
    [
      { name: 'Cu', count: 1 },
      { name: 'O', count: 2 },
      { name: 'H', count: 2 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Sulfate de sodium',
    'Na_2SO_4',
    142.04,
    [
      { name: 'Na', count: 2 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),
  new Molecule('Zinc', 'Zn', 65.38, [{ name: 'Zn', count: 1 }], false, 'solid'),
  new Molecule(
    'Chlorure de zinc',
    'ZnCl_2',
    136.315,
    [
      { name: 'Zn', count: 1 },
      { name: 'Cl', count: 2 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Hydroxyde de potassium',
    'KOH',
    56.10564,
    [
      { name: 'K', count: 1 },
      { name: 'O', count: 1 },
      { name: 'H', count: 1 },
    ],
    false,
    'solid',
  ),
  new Molecule(
    'Sulfate de potassium',
    'K_2SO_4',
    174.259,
    [
      { name: 'K', count: 2 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    "Peroxyde d'hydrogène",
    'H_2O_2',
    34.01474,
    [
      { name: 'H', count: 2 },
      { name: 'O', count: 2 },
    ],
    false,
    'liquid',
  ),

  new Molecule(
    'Chlorure de plomb(II)',
    'PbCl_2',
    278.104,
    [
      { name: 'Pb', count: 1 },
      { name: 'Cl', count: 2 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Iodure de potassium',
    'KI',
    166.0028,
    [
      { name: 'K', count: 1 },
      { name: 'I', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Iodure de plomb(II)',
    'PbI_2',
    461.0066,
    [
      { name: 'Pb', count: 1 },
      { name: 'I', count: 2 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Chlorure de potassium',
    'KCl',
    74.5513,
    [
      { name: 'K', count: 1 },
      { name: 'Cl', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Acétate de sodium',
    'CH_3COONa',
    82.033,
    [
      { name: 'C', count: 2 },
      { name: 'H', count: 3 },
      { name: 'O', count: 2 },
      { name: 'Na', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule('Soufre', 'S', 32.06, [{ name: 'S', count: 1 }], false, 'solid'),

  new Molecule(
    'Nitrate de baryum',
    'Ba(NO_3)_2',
    261.337,
    [
      { name: 'Ba', count: 1 },
      { name: 'N', count: 2 },
      { name: 'O', count: 6 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Sulfate de baryum',
    'BaSO_4',
    233.389,
    [
      { name: 'Ba', count: 1 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule('Cuivre', 'Cu', 63.546, [{ name: 'Cu', count: 1 }], false, 'solid'),

  new Molecule(
    'Nitrate de cuivre(II)',
    'Cu(NO_3)_2',
    187.555,
    [
      { name: 'Cu', count: 1 },
      { name: 'N', count: 2 },
      { name: 'O', count: 6 },
    ],
    false,
    'solid',
  ),

  new Molecule('Argent', 'Ag', 107.8682, [{ name: 'Ag', count: 1 }], false, 'solid'),

  new Molecule(
    'Phosphate de calcium',
    'Ca_3(PO_4)_2',
    310.177,
    [
      { name: 'Ca', count: 3 },
      { name: 'P', count: 2 },
      { name: 'O', count: 8 },
    ],
    false,
    'solid',
  ),

  new Molecule('Soufre', 'S₈', 256.52, [{ name: 'S', count: 8 }], false, 'solid'),

  new Molecule(
    'Nitrate de potassium',
    'KNO_3',
    101.1032,
    [
      { name: 'K', count: 1 },
      { name: 'N', count: 1 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),

  new Molecule('Azote', 'N_2', 28.02, [{ name: 'N', count: 2 }], false, 'gas'),

  new Molecule(
    'Nitrate de plomb(II)',
    'Pb(NO_3)_2',
    331.2098,
    [
      { name: 'Pb', count: 1 },
      { name: 'N', count: 2 },
      { name: 'O', count: 6 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Sulfate de plomb(II)',
    'PbSO_4',
    303.258,
    [
      { name: 'Pb', count: 1 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Oxyde de calcium',
    'CaO',
    56.0774,
    [
      { name: 'Ca', count: 1 },
      { name: 'O', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Chlorure de cuivre(II)',
    'CuCl_2',
    134.45,
    [
      { name: 'Cu', count: 1 },
      { name: 'Cl', count: 2 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Chlorure de fer(II)',
    'FeCl_2',
    126.751,
    [
      { name: 'Fe', count: 1 },
      { name: 'Cl', count: 2 },
    ],
    false,
    'solid',
  ),

  new Molecule('Chlore', 'Cl_2', 70.906, [{ name: 'Cl', count: 2 }], false, 'gas'),

  new Molecule(
    "Protoxyde d'azote",
    'N_2O',
    44.013,
    [
      { name: 'N', count: 2 },
      { name: 'O', count: 1 },
    ],
    false,
    'gas',
  ),

  new Molecule(
    'Peroxyde de dinitrogène',
    'N_2O_4',
    92.011,
    [
      { name: 'N', count: 2 },
      { name: 'O', count: 4 },
    ],
    false,
    'liquid',
  ),

  new Molecule(
    "Dioxyde d'azote",
    'NO_2',
    46.0055,
    [
      { name: 'N', count: 1 },
      { name: 'O', count: 2 },
    ],
    false,
    'liquid',
  ),

  new Molecule(
    'Chlorate de potassium',
    'KClO_3',
    122.55,
    [
      { name: 'K', count: 1 },
      { name: 'Cl', count: 1 },
      { name: 'O', count: 3 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Sulfate de zinc',
    'ZnSO_4',
    161.445,
    [
      { name: 'Zn', count: 1 },
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Acide phosphorique',
    'H_3PO_4',
    97.9952,
    [
      { name: 'H', count: 3 },
      { name: 'P', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'liquid',
  ),

  new Molecule(
    'Oxyde de sodium',
    'Na_2O',
    61.9789,
    [
      { name: 'Na', count: 2 },
      { name: 'O', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    "Monoxyde d'azote",
    'NO',
    30.0061,
    [
      { name: 'N', count: 1 },
      { name: 'O', count: 1 },
    ],
    false,
    'gas',
  ),

  new Molecule(
    'Monoxyde de carbone',
    'CO',
    28.01,
    [
      { name: 'C', count: 1 },
      { name: 'O', count: 1 },
    ],
    false,
    'gas',
  ),

  new Molecule(
    'Oxyde de fer(III)',
    'Fe_3O_4',
    231.533,
    [
      { name: 'Fe', count: 3 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Sulfure de cuivre(I)',
    'Cu_2S',
    159.16,
    [
      { name: 'Cu', count: 2 },
      { name: 'S', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Oxyde de cuivre(I)',
    'Cu_2O',
    143.09,
    [
      { name: 'Cu', count: 2 },
      { name: 'O', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Ion hydronium',
    'H_3O^+',
    19.02,
    [
      { name: 'H', count: 3 },
      { name: 'O', count: 1 },
    ],
    true,
    'aqueous',
  ),

  new Molecule(
    'Ion sulfate',
    'SO_4^{2-}',
    96.06,
    [
      { name: 'S', count: 1 },
      { name: 'O', count: 4 },
    ],
    true,
    'aqueous',
  ),

  new Molecule('Ion fer(II)', 'Fe^{2+}', 55.845, [{ name: 'Fe', count: 1 }], true, 'aqueous'),

  new Molecule(
    'Ion hydroxyde',
    'OH^-',
    17.01,
    [
      { name: 'O', count: 1 },
      { name: 'H', count: 1 },
    ],
    true,
    'aqueous',
  ),

  new Molecule('Ion argent(I)', 'Ag^+', 107.8682, [{ name: 'Ag', count: 1 }], true, 'aqueous'),

  new Molecule(
    'Ion phosphate',
    'PO_4^{3-}',
    94.9714,
    [
      { name: 'P', count: 1 },
      { name: 'O', count: 4 },
    ],
    true,
    'aqueous',
  ),

  new Molecule(
    "Phosphate d'argent(I)",
    'Ag_3PO_4',
    418.581,
    [
      { name: 'Ag', count: 3 },
      { name: 'P', count: 1 },
      { name: 'O', count: 4 },
    ],
    false,
    'solid',
  ),

  new Molecule('Ion cuivre(II)', 'Cu^{2+}', 63.546, [{ name: 'Cu', count: 1 }], true, 'aqueous'),

  new Molecule(
    'Acétate de sodium',
    'CH_3COONa',
    82.033,
    [
      { name: 'C', count: 2 },
      { name: 'H', count: 3 },
      { name: 'O', count: 2 },
      { name: 'Na', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Phosphate de calcium',
    'Ca_3(PO_3)_2',
    310.177,
    [
      { name: 'Ca', count: 3 },
      { name: 'P', count: 2 },
      { name: 'O', count: 8 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    "Chlorure d'ammonium",
    'NH_4Cl',
    53.49,
    [
      { name: 'N', count: 1 },
      { name: 'H', count: 4 },
      { name: 'Cl', count: 1 },
    ],
    false,
    'solid',
  ),

  new Molecule('Soufre', 'S_8', 256.52, [{ name: 'S', count: 8 }], false, 'solid'),

  new Molecule(
    'Hydroxyde de magnésium',
    'Mg(OH)_2',
    58.3197,
    [
      { name: 'Mg', count: 1 },
      { name: 'O', count: 2 },
      { name: 'H', count: 2 },
    ],
    false,
    'solid',
  ),

  new Molecule(
    'Chlorure de magnésium',
    'MgCl_2',
    95.211,
    [
      { name: 'Mg', count: 1 },
      { name: 'Cl', count: 2 },
    ],
    false,
    'solid',
  ),
];