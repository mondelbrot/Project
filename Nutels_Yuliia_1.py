import json
# Otevření souboru "Alice.txt" pro čtení 
with open('Alice.txt', 'r', encoding='utf8') as f:
   data = f.read()

# Převedení všech znaků na malá písmena a odstranění mezer a nových řádků
data = data.lower().replace(" ", "").replace("\n", "")
pocet_data = {} # Inicializace prázdného slovníku pro ukládání počtu výskytů znaků

# Projdeme všechny znaky v proměnné 'data'

for dat in data:   # Pokud znak již existuje v 'pocet_data'
   
   if dat in pocet_data:
      pocet_data[dat]=pocet_data.get(dat, 0) + 1  # Zvýšíme počet výskytů o 1
   else:
      pocet_data.setdefault(dat, 1)  # Pokud znak neexistuje, přidáme ho s počátečním počtem 1     

# Abecední třídění
sorted_pocet_data = dict(sorted(pocet_data.items()))

# Otevření souboru "ukol1_output.json" pro zápis      
with open('ukol1_output.json', 'w', encoding='utf8') as output_file:
   json.dump(sorted_pocet_data, output_file, ensure_ascii=False, indent=4)

# Výsledkem bude soubor "ukol1_output.json" obsahující počet výskytů znaků v "Alice.txt"     
   
   
