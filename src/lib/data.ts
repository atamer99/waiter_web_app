import { MenuData, MenuItem } from "@/types";

export const TOTAL_TABLES = 22;
export const STORAGE_KEY = 'lebaron_pos_v2_store';

const menuJson = {
    "Pizza Rossa": [
        {
            "name": "Mariana",
            "price": 8.00,
            "description": "Tomatensauce, frischer knoblauch, Oregano, Olivenöl",
            "allergens": "A"
        },
        {
            "name": "Margarita",
            "price": 9.50,
            "description": "Tomatensauce, Mozzarella Fior di Latte, Parmesan, fr. Basilikum, Olivenöl.",
            "allergens": "A, G"
        },
        {
            "name": "Salami",
            "price": 10.50,
            "description": "Tomatensauce, Salami, Mozzarella Fior di latte, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Cardinale",
            "price": 10.50,
            "description": "Tomatensauce, Salami, Mozzarella Fior di latte, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Diavolo",
            "price": 10.90,
            "description": "Tomatensauce, scharfes Öl, Geräucherter scharfsalami, Mozzarella Fior di latte, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Tonno e cipolla",
            "price": 10.75,
            "description": "Tomatensauce, Thunfisch, Mozzarella Fiordilatte, Zwiebeln, schwarze Oliven, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Casereccia",
            "price": 10.90,
            "description": "Fleisch sause Hausgemachte, Mozzarella Mozzarella Fior di Latte, Scamorza Affumicata",
            "allergens": "A, G"
        },
        {
            "name": "Alla bolognese",
            "price": 12.50,
            "description": "Tomatensauce, Mozzarella Fior di latte, bresaola, Bufala Mozzarella, Rucola, Balsamicocreme, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Burrata al pesto",
            "price": 13.00,
            "description": "Burratt di Bufala Campana, Pestosause, Mozzarella Fior di latte, Cherrytomaten, Olivenöl.",
            "allergens": "A, G"
        },
        {
            "name": "Bresaola",
            "price": 11.50,
            "description": "Tomatensauce, Mozzarella Fior di latte, bresaola, Bufala Mozzarella, Rucola, Balsamicocreme, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Quattro stagioni",
            "price": 13.50,
            "description": "Tomatensauce, Schinken, Salami, Pilze, Artischocken, Mozzarella Fiordilatte, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Frutti di Mare",
            "price": 13.90,
            "description": "Tomatensauce, vongole, Calamari, Miesmuscheln, fr. Basilikum, Garnelen",
            "allergens": "A, G"
        },
        {
            "name": "Di Funghi",
            "price": 10.50,
            "description": "Tomatensauce, Salami, Champignons, Mozzarella Fior di latte,, fr. Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Rosé Pizza",
            "price": 10.50,
            "description": "Tomatensauce, Mozzarella Fior di latte, Champignons, Oregano, Parmesan",
            "allergens": "A, G"
        },
        {
            "name": "traditionale",
            "price": 12.50,
            "description": "Tomatensauce, Mozzarella Fior di latte, Rucola, Cherrytomaten, Parmesan, Olivenöl.",
            "allergens": "G"
        }
    ],
    "Pizza Bianca": [
        {
            "name": "PANCETTA E FUNGHI",
            "price": 12.50,
            "description": "Speck, Pilze, Mozzarella Fior di latte, geräucherter Käse, Olivenöl, fr. Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Formaggio",
            "price": 12.75,
            "description": "Formaggiosauce, Mozzarella, Geräucherter Käse, Gorgonzola, Frischkäse, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Dello sportivo",
            "price": 12.80,
            "description": "Formaggiosauce, Mozzarella, Geräucherter Käse, Gorgonzola, Frischkäse, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Melanzane-Sauce",
            "price": 12.95,
            "description": "melanzane, Zucchine, Paprika, Cherrytomaten, Oliven, Mozzarella Fior di latte, fr.Basilikum.",
            "allergens": "A, G"
        },
        {
            "name": "Alle Verdure",
            "price": 12.95,
            "description": "Kirschtomaten, Bufala Mozzarella, Rucola, Pesto, fr.Basilikum.",
            "allergens": "A, G"
        }
    ],
    "Pizza dolce": [
        {
            "name": "Nutella pizza",
            "price": 14.50,
            "description": "Nutellasauce, Früchte",
            "allergens": ""
        },
        {
            "name": "pistacchio pizza",
            "price": 15.50,
            "description": "Pistacchiosauce, Banana, fr. Ricotta",
            "allergens": ""
        }
    ],
    "Kinder": [
        {
            "name": "Cuore",
            "price": 6.50,
            "description": "Tomatensause, Mozzarella Fior di Latte",
            "allergens": "A, G"
        },
        {
            "name": "Micky Maus",
            "price": 7.50,
            "description": "Tomatensause, Salami, Mozzarella Fior di Latte",
            "allergens": "A, G"
        },
        {
            "name": "Cotoletta di pollo",
            "price": 10.50,
            "description": "Schnitzel, Limetten-Mayonnaise, Pommes, Ketchup, Zitrone.",
            "allergens": "A, G"
        },
        {
            "name": "bocconcini di pollo",
            "price": 9.50,
            "description": "Chicken Nuggets, Pommes, Limetten-Mayonnaise, Ketchup.",
            "allergens": "A, G"
        }
    ],
    "Pane": [
        {
            "name": "KnoblauchBrot",
            "price": 5.00,
            "allergens": "A, G"
        },
        {
            "name": "RosmarinBrot",
            "price": 6.00,
            "allergens": "A, G"
        },
        {
            "name": "ParmesanBrot",
            "price": 6.00,
            "allergens": "A, G"
        }
    ],
    "Antipasti": [
        {
            "name": "Cnoco fritto",
            "price": 6.50,
            "description": "3Stk. Frittierter Pizzateig, fr.käse, Rucola, Tomaten,Oregano, Salz, Schwarzpfeffer, Olivenöl.",
            "allergens": "A, G"
        },
        {
            "name": "Bruschetta pomodoro",
            "price": 7.50,
            "description": "3stk: Tomaten, Zwiebeln, Basilikum, Salz, Olivenöl.",
            "allergens": "A"
        },
        {
            "name": "Bruschetta Verdura",
            "price": 8.50,
            "description": "3Stk: Melanzane, zucchine, Paprika, melanzane creme.",
            "allergens": "A"
        },
        {
            "name": "Bruschetta Salmone",
            "price": 9.90,
            "description": "3Stk: Geräucherter lachs, fr.käse, gurken, zitrone, Getrocknete schwarze Oliven, Limette pesto.",
            "allergens": "A, D, G"
        },
        {
            "name": "Tartare di Salmone",
            "price": 12.75,
            "description": "Geräucherter lachs, Getrocknete schwarze Oliven, grüne Oliven, Zitronenschalen, fr.Ricotta, Knuspriger Parmesan, Limette pesto, knoblauch brot.",
            "allergens": "D"
        },
        {
            "name": "Tagliere di Salumi e Formaggi",
            "price": 16.50,
            "description": "Geräucherter scharfsalami, Geräucherter Salami, Geräucherter Speck, Bresaola, schinken, Salami, mini Mozzarella, schwarz Oliven, scamorza affumicata, Mozzarella, Parmesan, fr.käse, cherrytomaten",
            "available": false
        }
    ],
    "Di zuppe": [
        {
            "name": "DI POMODORO",
            "price": 5.90,
            "description": "Tomatensauce, schwarzer Pfeffer, Salz, Olivenöl, Parmesan, Knoblauchbrot",
            "allergens": "A"
        },
        {
            "name": "DI FUNGHI",
            "price": 7.50,
            "description": "Champignons, Zwiebeln, Knoblauch, Butter, schwarzer Pfeffer, Salz, Sahne, Knoblauchbrot",
            "allergens": "A"
        },
        {
            "name": "MINESTRONE",
            "price": 8.50,
            "description": "Tomatensauce, Spinat, Mais, Karotten, Knoblauch, Petersilie, Olivenöl, frisches Basilikum, Parmesan, Knoblauchbrot",
            "allergens": "A, G"
        },
        {
            "name": "DI POLLO",
            "price": 9.50,
            "description": "Hühnerbrust, Butter, Sahne, Zwiebeln, Knoblauch, schwarzer Pfeffer, Salz, Knoblauchbrot",
            "allergens": "A, G"
        },
        {
            "name": "GUAZZETTO DI MARE",
            "price": 17.50,
            "description": "Miesmuscheln, Vongole, Calamari, Fisch, Tomaten, frischer Knoblauch, Olivenöl, Knoblauchfladenbrot",
            "allergens": "A, D, G, R"
        }
    ],
    "Insalata": [
        {
            "name": "INSALATA MISTA",
            "price": 4.50,
            "description": "Gemischter Blattsalat, Cherrytomaten, Balsamico-Dressing",
            "allergens": "M"
        },
        {
            "name": "RUCOLA",
            "price": 7.50,
            "description": "Rucola, Cherrytomaten, BalsamicoDressing, Nussbaum, Parmesan",
            "allergens": "G"
        },
        {
            "name": "INSALATA CAPRESE",
            "price": 8.90,
            "description": "Bufala Mozzarella, frische Tomaten, Salz, schwarzer Pfeffer, Balsamicocreme, frisches Basilikum, Olivenöl, Knoblauchbrot",
            "allergens": "G"
        },
        {
            "name": "INSALATA BURRATA",
            "price": 10.90,
            "description": "Burrata di Bufala Campana, Cherrytomaten, Olivenöl, frisches Basilikum, Salz, schwarzer Pfeffer, Frischkäse, Knoblauchbrot",
            "allergens": "G"
        },
        {
            "name": "INSALATA MINI MOZZARELLA",
            "price": 9.75,
            "description": "Pesto, Frischkäse, Cherrytomaten, Mini Mozzarella, frisches Basilikum, schwarzer Pfeffer, Salz, Olivenöl, Knoblauchbrot",
            "allergens": "G"
        },
        {
            "name": "CAESAR SALAT",
            "price": 10.50,
            "description": "Gemischter Blattsalat, Hähnchenstücke, Parmesan, Brotcroutons, Caesar-Dressing, Cherrytomaten",
            "allergens": "A, C, D, G, M"
        },
        {
            "name": "INSALATA TONNO FRESCO",
            "price": 9.50,
            "description": "Gemischter Blattsalat, Mais, Cherrytomaten, Oliven, Caesar-Dressing",
            "allergens": "D, M"
        }
    ],
    "PASTA": [
        {
            "name": "SPAGHETTI POMODORO",
            "price": 8.90,
            "description": "Pomodorini, Petersilie, schwarzer Pfeffer, Parmesan, Salz",
            "allergens": "A"
        },
        {
            "name": "Penne ARRABIATA",
            "price": 9.90,
            "description": "Frischer Knoblauch, Petersilie, milde Pfefferoni, Chili-Paprika, Cherrytomaten",
            "allergens": "A"
        },
        {
            "name": "SPAGHETTI BOLOGNESE",
            "price": 10.50,
            "description": "Hausgemachte Fleischsauce, Parmesan, Petersilie",
            "allergens": "A, G"
        },
        {
            "name": "SPAGHETTI ALLA CARBONARA",
            "price": 10.75,
            "description": "Speck, Knoblauch, Sahne, schwarzer Pfeffer, Eigelb, Parmesan",
            "allergens": "A, C, G"
        },
        {
            "name": "penne CON POLLO E FUNGHI",
            "price": 11.50,
            "description": "Hähnchenstücke mit Champignons, Sahne, Knoblauch, schwarzer Pfeffer, Salz, Parmesan",
            "allergens": "A, G"
        },
        {
            "name": "PESTO GNOCCHI",
            "price": 11.75,
            "description": "Frische Kartoffelgnocchi, Basilikum-Pesto, bunte Paprika, Cherrytomaten",
            "allergens": "A, G"
        },
        {
            "name": "TAGLIATELLE AL SALMONE",
            "price": 14.50,
            "description": "Räucherlachs, Sahne, Parmesan, Tomatensauce, Petersilie, schwarzer Pfeffer",
            "allergens": "A, D, G"
        },
        {
            "name": "TAGLIATELLE AL FRUTTI DI MARE",
            "price": 15.50,
            "description": "Tomatensauce, Miesmuscheln, Vongole, Calamari, Fisch, frischer Knoblauch, Petersilie, Zitronenschale",
            "allergens": "A, D, R"
        }
    ],
    "Pasti speciali": [
        {
            "name": "CHICKEN MARTINI",
            "price": 12.90,
            "description": "Hühnerbrust (2 Stk.), Karotten, grüne Bohnen, Kartoffeln, Champignons , Pilze",
            "allergens": "L"
        },
        {
            "name": "POLLO CON VERDURE",
            "price": 12.50,
            "description": "Hühnerfleisch, mix Paprika, Zucchini, Kartoffeln, Knoblauchbrot",
            "allergens": "L"
        },
        {
            "name": "Polo con Fungi",
            "price": 12.80,
            "description": "Hähnchen filte, Pilzcreme, Salz, Petersilie schwarzpfeffer, Knusprige Bratkartoffeln.",
            "allergens": "A, D, G"
        },
        {
            "name": "risotto a gamberi",
            "price": 13.95,
            "description": "Shrimps, risotto mit pesto, klein garnelen, frisch Ricotta.",
            "allergens": "A, D"
        },
        {
            "name": "CALAMARI ARRABIATA",
            "price": 13.50,
            "description": "Calamari, milde Pfefferoni, Chili-Paprika, Knoblauch, Cherrytomaten, Petersilie",
            "allergens": "A, G"
        },
        {
            "name": "SALMONE OREGANATA",
            "price": 14.50,
            "description": "Lachsfilet, Spinat, Knoblauch, Oregano,risotto ,räucherlachs sahne",
            "allergens": "A, D, G"
        },
        {
            "name": "VEAL SCALLOPINI",
            "price": 14.50,
            "description": "Kalbsfilet (3 Stk.), Pilzcreme, Spinat, Knusprige Bratkartoffeln, Knoblauch",
            "allergens": "A, D"
        },
        {
            "name": "LUCIOPERCA CON VERDURE",
            "price": 15.50,
            "description": "Zanderfilet (2 Stk.), klein garnelen , risotto , sahne",
            "allergens": "A, D, G"
        }
    ],
    "Hamburger": [
        {
            "name": "CLASSICO",
            "price": 9.90,
            "description": "Rinderfleisch, Cheddar, Salat, Tomaten, Gurken, Mayonnaise, Pommes, Limetten-Mayonnaise",
            "allergens": "C, G, M"
        },
        {
            "name": "DI VERDURE",
            "price": 11.80,
            "description": "Gemüseburger, Salat, Tomaten, Champignonscreme, Formaggikäse, Gurken, karamellisierte Zwiebeln, Limetten-Mayonnaise, Pommes",
            "allergens": "A, G, C, M"
        },
        {
            "name": "DI POLLO",
            "price": 12.80,
            "description": "Hühnerfilet (2 Stk.), Champignonscreme, Formaggikäse, Salat, Tomaten, Gurken, knusprige Zwiebeln, Pommes, Limetten-Mayonnaise",
            "allergens": "A, G, C, M"
        },
        {
            "name": "CON SCAMORZA",
            "price": 14.50,
            "description": "Rinderfleisch (2 Stk.), Scamorza Affumicata, Paprikacreme, Salat, Tomaten, Gurken, Speck, karamellisierte Zwiebeln, Pommes, Limetten-Mayonnaise",
            "allergens": "C, G, M"
        },
        {
            "name": "PIATTO DI HAMBURGER",
            "price": 15.50,
            "description": "Rinderfleisch (2 Stk.), Cheddar, Tomaten, Speck, Cheddarsauce, knusprige Zwiebeln, Pommes, Limetten-Mayonnaise",
            "allergens": "A, C, G, M"
        }
    ],
    "Dolce": [
        {
            "name": "PROFITEROLES (3 Stk.)",
            "price": 6.50,
            "allergens": "A, C, G"
        },
        {
            "name": "TIRAMISU MIT KAKAO",
            "price": 6.80,
            "allergens": "A, C, G"
        },
        {
            "name": "PANNA COTTA ERDBEERSAUCE",
            "price": 6.80,
            "allergens": "G"
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
            "allergens": "G, H"
        },
        {
            "name": "PISTAZIE",
            "price": 2.70,
            "allergens": "G, H"
        },
        {
            "name": "SCHOKOLADE",
            "price": 2.70,
            "allergens": "G, H"
        },
        {
            "name": "KARAMELL",
            "price": 2.70,
            "allergens": "G, H"
        },
        {
            "name": "ERDBEERE",
            "price": 2.70,
            "allergens": "G, H"
        },
        {
            "name": "LE BARON EISCREME",
            "price": 7.50,
            "allergens": "G, H"
        },
        {
            "name": "DJAMBO",
            "price": 7.50,
            "allergens": "G, H"
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
            "allergens": "O"
        },
        {
            "name": "PIÑA COLADA",
            "price": 7.40,
            "allergens": "O"
        },
        {
            "name": "FRÜCHTE",
            "price": 6.40,
            "allergens": "O"
        },
        {
            "name": "IMPERATOR",
            "price": 12.50,
            "allergens": "O"
        },
        {
            "name": "BANANENMILCH MIT ERDBEERE",
            "price": 7.90,
            "allergens": "O"
        },
        {
            "name": "BANANENMILCH MIT MANGO",
            "price": 7.90,
            "allergens": "O"
        },
        {
            "name": "BLUE HAWAII",
            "price": 8.20,
            "allergens": "O"
        },
        {
            "name": "AVOCADO",
            "price": 9.90,
            "allergens": "O"
        },
        {
            "name": "Qashati",
            "price": 12.50,
            "allergens": "O"
        },
        {
            "name": "Toti Früchtig",
            "price": 7.90,
            "allergens": "O"
        },
        {
            "name": "MATCHA MANGO",
            "price": 6.50,
            "allergens": "O"
        },
        {
            "name": "MATCHA ERDBEERE",
            "price": 6.50,
            "allergens": "O"
        },
        {
            "name": "LE BARON COCKTAIL",
            "price": 8.50,
            "allergens": "O"
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
