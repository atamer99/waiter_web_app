import { MenuData, MenuItem } from "@/types";

export const TOTAL_TABLES = 22;
export const STORAGE_KEY = 'lebaron_pos_v2_store';

const menuJson = {
    "Rossa Pizza": [
        {
            "name": "Mariana",
            "price": 8.00,

        },
        {
            "name": "Margarita",
            "price": 9.50,

        },
        {
            "name": "Salami",
            "price": 10.50,

        },
        {
            "name": "Cardinale",
            "price": 10.50,

        },
        {
            "name": "Diavolo",
            "price": 10.90,

        },
        {
            "name": "Tonno e cipolla",
            "price": 10.75,

        },
        {
            "name": "Casereccia",
            "price": 10.90,

        },
        {
            "name": "Alla bolognese",
            "price": 12.50,

        },
        {
            "name": "Burrata al pesto",
            "price": 13.00,

        },
        {
            "name": "Bresaola",
            "price": 11.50,

        },
        {
            "name": "Quattro stagioni",
            "price": 13.50,

        },
        {
            "name": "Frutti di Mare",
            "price": 13.90,

        },
        {
            "name": "Di Funghi",
            "price": 10.50,

        },
        {
            "name": "Rosé Pizza",
            "price": 10.50,

        }
        
    ],
    "Bianca Pizza": [
        {
            "name": "PANCETTA E FUNGHI",
            "price": 12.50,

        },
        {
            "name": "Formaggio",
            "price": 12.75,

        },
        {
            "name": "Dello sportivo",
            "price": 12.80,

        },
        {
            "name": "Melanzane-Sauce",
            "price": 12.95,

        },
        {
            "name": "Alle Verdure",
            "price": 12.95,

        }
    ],
    "Dolce Pizza": [
        {
            "name": "Nutella pizza",
            "price": 14.50,

        },
        {
            "name": "pistacchio pizza",
            "price": 15.50,

        }
    ],
    "Kinder": [
        {
            "name": "Cuore",
            "price": 6.50,

        },
        {
            "name": "Micky Maus",
            "price": 7.50,

        },
        {
            "name": "Cotoletta di pollo",
            "price": 10.50,

        },
        {
            "name": "bocconcini di pollo",
            "price": 9.50,

        }
    ],
    "Pane": [
        {
            "name": "KnoblauchBrot",
            "price": 5.00,

        },
        {
            "name": "RosmarinBrot",
            "price": 6.00,

        },
        {
            "name": "ParmesanBrot",
            "price": 6.00,

        }
    ],
    "Antipasti": [
        {
            "name": "Cnoco fritto",
            "price": 6.50,

        },
        {
            "name": "Bruschetta pomodoro",
            "price": 7.50,

        },
        {
            "name": "Bruschetta Verdura",
            "price": 8.50,

        },
        {
            "name": "Bruschetta Salmone",
            "price": 9.90,

        },
        {
            "name": "Tartare di Salmone",
            "price": 12.75,

        },
        {
            "name": "Tagliere di Salumi e Formaggi",
            "price": 16.50,

            "available": false
        }
    ],
    "Di zuppe": [
        {
            "name": "DI POMODORO",
            "price": 5.90,

        },
        {
            "name": "DI FUNGHI",
            "price": 7.50,

        },
        {
            "name": "MINESTRONE",
            "price": 8.50,

        },
        {
            "name": "DI POLLO",
            "price": 9.50,

        },
        {
            "name": "GUAZZETTO DI MARE",
            "price": 17.50,

        }
    ],
    "Insalata": [
        {
            "name": "INSALATA MISTA",
            "price": 4.50,

        },
        {
            "name": "RUCOLA",
            "price": 7.50,

        },
        {
            "name": "INSALATA CAPRESE",
            "price": 8.90,

        },
        {
            "name": "INSALATA BURRATA",
            "price": 10.90,

        },
        {
            "name": "INSALATA MINI MOZZARELLA",
            "price": 9.75,

        },
        {
            "name": "CAESAR SALAT",
            "price": 10.50,

        },
        {
            "name": "INSALATA TONNO FRESCO",
            "price": 9.50,

        }
    ],
    "PASTA": [
        {
            "name": "SPAGHETTI POMODORO",
            "price": 8.90,

        },
        {
            "name": "Penne ARRABIATA",
            "price": 9.90,

        },
        {
            "name": "SPAGHETTI BOLOGNESE",
            "price": 10.50,

        },
        {
            "name": "SPAGHETTI ALLA CARBONARA",
            "price": 10.75,

        },
        {
            "name": "STROZZAPRETI CON POLLO E FUNGHI",
            "price": 11.50,

        },
        {
            "name": "PESTO GNOCCHI",
            "price": 11.75,

        },
        {
            "name": "TAGLIATELLE AL SALMONE",
            "price": 14.50,

        },
        {
            "name": "TAGLIATELLE AL FRUTTI DI MARE",
            "price": 15.50,

        },
        {
            "name": "GNOCCHI CON RISO",
            "price": 14.75,

        }
    ],
    "Pasti speciali": [
        {
            "name": "CHICKEN MARTINI",
            "price": 11.90,

        },
        {
            "name": "POLLO CON VERDURE",
            "price": 12.50,

        },

        {
            "name": "CALAMARI ARRABIATA",
            "price": 13.50,

        },
        {
            "name": "SALMONE OREGANATA",
            "price": 14.50,

        },
        {
            "name": "VEAL SCALLOPINI",
            "price": 14.50,

        },
        {
            "name": "LUCIOPERCA CON VERDURE",
            "price": 15.50,

        },
        {
            "name": "ALETTE DI POLLO",
            "price": 13.50,

        },
        {
            "name": "CALAMARI FRITTI",
            "price": 13.95,

        }
    ],
    "Hamburger": [
        {
            "name": "CLASSICO",
            "price": 9.90,

        },
        {
            "name": "DI VERDURE",
            "price": 11.80,

        },
        {
            "name": "DI POLLO",
            "price": 12.80,

        },
        {
            "name": "CON SCAMORZA",
            "price": 14.50,

        },
        {
            "name": "PIATTO DI HAMBURGER",
            "price": 15.50,

        }
    ],
    "Dolce": [
        {
            "name": "PROFITEROLES (3 Stk.)",
            "price": 6.50,

        },
        {
            "name": "TIRAMISU MIT KAKAO",
            "price": 6.80,

        },
        {
            "name": "PANNA COTTA ERDBEERSAUCE",
            "price": 6.80,

        }
    ],
    "Desserts": [
        {
            "name": "CREPE KLASSIK",
            "price": 7.90
        },
        {
            "name": "CREPE LE BARON",
            "price": 9.90
        },
        {
            "name": "CREPE FETTUCCINE",
            "price": 8.50
        },
        {
            "name": "CREPE LOTUS",
            "price": 8.20
        },
        {
            "name": "CREPE DUBAI",
            "price": 9.90
        },
        {
            "name": "WAFFEL KLASSIK",
            "price": 7.90
        },
        {
            "name": "WAFFEL PISTAZIE",
            "price": 8.20
        },
        {
            "name": "WAFFEL LE BARON",
            "price": 9.90
        },
        {
            "name": "OBSTSALAT NUTELLA",
            "price": 10.50
        },
        {
            "name": "OBSTSALAT PISTAZIE",
            "price": 10.90
        },
        {
            "name": "OBSTSALAT HONIG",
            "price": 10.50
        }
    ],
    "Icecreme": [
        {
            "name": "VANILLE",
            "price": 2.70,

        },
        {
            "name": "PISTAZIE",
            "price": 2.70,

        },
        {
            "name": "SCHOKOLADE",
            "price": 2.70,

        },
        {
            "name": "KARAMELL",
            "price": 2.70,

        },
        {
            "name": "ERDBEERE",
            "price": 2.70,

        },
        {
            "name": "LE BARON EISCREME",
            "price": 7.50,

        },
        {
            "name": "DJAMBO",
            "price": 7.50,

        }
    ],
    "Milch Shake": [
        {
            "name": "VANILLE SHAKE",
            "price": 7.90
        },
        {
            "name": "PISTAZIE SHAKE",
            "price": 8.50
        },
        {
            "name": "SCHOKOLADE SHAKE",
            "price": 7.90
        },
        {
            "name": "ERDBEER SHAKE",
            "price": 7.90
        },
        {
            "name": "KARAMELL SHAKE",
            "price": 7.90
        },
        {
            "name": "OREO SHAKE",
            "price": 8.20
        },
        {
            "name": "SNICKERS SHAKE",
            "price": 8.50
        },
        {
            "name": "KITKAT SHAKE",
            "price": 8.50
        },
        {
            "name": "KINDER SHAKE",
            "price": 8.50
        }
    ],
    "Mojito": [
        {
            "name": "MOJITO KIWI",
            "price": 7.90
        },
        {
            "name": "MOJITO MANGO",
            "price": 7.90
        },
        {
            "name": "MOJITO KLASSISCH",
            "price": 6.40
        },
        {
            "name": "MOJITO HIMBEERE",
            "price": 7.90
        },
        {
            "name": "MOJITO WASSERMELONE",
            "price": 7.90
        },
        {
            "name": "MOJITO MARACUJA",
            "price": 7.90
        },
        {
            "name": "MOJITO ERDBEERE",
            "price": 7.90
        },
        {
            "name": "MOJITO BLUE CURACAO",
            "price": 7.90
        }
    ],
    "cocktail": [
        {
            "name": "JAMAICA",
            "price": 6.90,

        },
        {
            "name": "PIÑA COLADA",
            "price": 7.40,

        },
        {
            "name": "FRÜCHTE",
            "price": 6.40,

        },
        {
            "name": "IMPERATOR",
            "price": 12.50,

        },
        {
            "name": "BANANENMILCH MIT ERDBEERE",
            "price": 7.90,

        },
        {
            "name": "BANANENMILCH MIT MANGO",
            "price": 7.90,

        },
        {
            "name": "BLUE HAWAII",
            "price": 8.20,

        },
        {
            "name": "AVOCADO",
            "price": 9.90,

        },
        {
            "name": "Qashati",
            "price": 12.50,

        },
        {
            "name": "Toti Früchtig",
            "price": 7.90,

        },
        {
            "name": "MATCHA MANGO",
            "price": 6.50,

        },
        {
            "name": "MATCHA ERDBEERE",
            "price": 6.50,

        },
        {
            "name": "LE BARON COCKTAIL",
            "price": 8.50,

        }
    ],
    "Frischer Saft": [
        {
            "name": "ORANGE",
            "price": 6.20
        },
        {
            "name": "ANANAS",
            "price": 6.50
        },
        {
            "name": "MANGO",
            "price": 6.50
        },
        {
            "name": "ERDBEERE",
            "price": 6.90
        },
        {
            "name": "ZITRONE",
            "price": 6.20
        },
        {
            "name": "GRANATAPFEL",
            "price": 7.50
        },
        {
            "name": "POMELO",
            "price": 7.50
        },
        {
            "name": "HIMBEERE",
            "price": 6.50
        },
        {
            "name": "WASSERMELONE",
            "price": 6.50
        },
        {
            "name": "KIWI",
            "price": 6.50
        }
    ],
    "kalter kaffee": [
        {
            "name": "EIS LATTE",
            "price": 5.50
        },
        {
            "name": "EIS MOCHA",
            "price": 6.20
        },
        {
            "name": "EIS KARAMELL LATTE",
            "price": 6.20
        },
        {
            "name": "EIS AMERICANO",
            "price": 4.50
        },
        {
            "name": "EIS SPANISH LATTE",
            "price": 6.20
        },
        {
            "name": "EIS BLAUE SPANISH LATTE",
            "price": 6.90
        },
        {
            "name": "FRAPPÉ KARAMELL",
            "price": 7.50
        },
        {
            "name": "FRAPPÉ VANILLE",
            "price": 7.50
        },
        {
            "name": "FRAPPÉ SCHOKOLADE",
            "price": 7.50
        }
    ],
    "heisse Getränke": [
        {
            "name": "CAPPUCCINO",
            "price": 4.80
        },
        {
            "name": "KAFFEE LATTE",
            "price": 5.50
        },
        {
            "name": "KARAMELL LATTE",
            "price": 5.80
        },
        {
            "name": "MOKKA LATTE",
            "price": 5.80
        },
        {
            "name": "AMERICANO",
            "price": 4.20
        },
        {
            "name": "ESPRESSO SINGLE",
            "price": 2.50
        },
        {
            "name": "ESPRESSO DOPPIO",
            "price": 3.50
        },
        {
            "name": "TÜRKISCHER KAFFEE",
            "price": 3.50
        },
        {
            "name": "MELANGE",
            "price": 3.90
        },
        {
            "name": "VERLÄNGERTER",
            "price": 3.50
        },
        {
            "name": "RISTRETTO",
            "price": 2.50
        },
        {
            "name": "ESPRESSO MACCHIATO",
            "price": 2.60
        },
        {
            "name": "HOT CHOCOLATE",
            "price": 5.50
        },
        {
            "name": "SCHWARZER TEE",
            "price": 2.50
        },
        {
            "name": "GRÜN-/FRÜCHTETEE",
            "price": 3.50
        }
    ],
    "Softdrinks": [
        {
            "name": "RED BULL",
            "price": 3.90
        },
        {
            "name": "RED BULL ZERO",
            "price": 3.90
        },
        {
            "name": "COCA-COLA",
            "price": 2.90
        },
        {
            "name": "COCA-COLA ZERO",
            "price": 2.90
        },
        {
            "name": "SPRITE",
            "price": 2.90
        },
        {
            "name": "FANTA",
            "price": 2.90
        },
        {
            "name": "EISTEE ZITRONE",
            "price": 2.90
        },
        {
            "name": "EISTEE PFIRSICH",
            "price": 2.90
        },
        {
            "name": "SODA ZITRONE",
            "price": 3.90
        },
        {
            "name": "SODA",
            "price": 2.90
        },
        {
            "name": "HIMBEER-SODA",
            "price": 4.50
        },
        {
            "name": "Mineralwasser",
            "price": 2.00
        }
    ]
};

// Convert JSON structure to MenuItem array
export const menuItems: MenuItem[] = Object.entries(menuJson).flatMap(([category, items]) =>
    items.map((item: any, index) => ({
        id: `${category.toLowerCase().replace(/\s+/g, '-')}-${index}`,
        name: item.name,
        nameEn: item.name, // Fallback to provided name
        description: item.description,
        descriptionEn: item.description, // Fallback
        category: category,
        price: item.price,
        ingredients: item.description, // some templates use ingredients
        available: item.available !== false, // default to true unless explicitly false
        allergens: item.allergens,
        imageUrl: "", // You can add image URLs here if needed
        variants: item.variants // Keep variants if they exist, though new data seems to lack them
    }))
);

// Group back to MenuData for compatibility with MenuSection
export const MENU_DATA: MenuData = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
        acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
}, {} as MenuData);
