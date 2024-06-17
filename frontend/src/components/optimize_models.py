import subprocess
import os

# Diretório base onde os modelos estão localizados
base_dir = 'C:/Users/conta/Documents/EstagSenior/frontend/public/models'

# Lista de arquivos .glb (sem o caminho completo)
model_files = [
    'gaming_chair.glb',
    'gaming_desktop_pc.glb',
    'modern_double_bed.glb',
    'bmo_realistic.glb',
    'book_shelf.glb',
    'bureau_2.glb',
    'samsung_s22_ultra.glb',
    'jenson_bedside_table_dark_stain_oak.glb',
    'cat.glb',
    '5x7_ojai_cali_rug.glb',
    'hanger_chusig.glb',
    'laying_under_a_tree_with_pink_leaves_and_wind.glb',
    'sneakers_seen.glb',
    'jeans_jacket_on_a_hanger.glb',
    'striped_coat_on_a_hanger.glb',
    'playstation_5.glb',
    'rigged_monitor_iiyama_gb2770hsu_free_download.glb',
    'playstation_5_dualsense.glb',
    'books_collection.glb',
    'window-v1 (1).glb'
]

# Função para aplicar o comando gltf-pipeline a um arquivo .glb
def optimize_model(file_name):
    model_path = os.path.join(base_dir, file_name)
    
    if not os.path.exists(model_path):
        print(f"File not found: {model_path}")
        return
    
    command = f"gltf-pipeline -i {model_path} -o {model_path} -d"
    try:
        subprocess.run(command, check=True, shell=True)
        print(f"Optimized {model_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error optimizing {model_path}: {e}")

# Aplicar o comando a todos os modelos na lista
for model_file in model_files:
    optimize_model(model_file)
