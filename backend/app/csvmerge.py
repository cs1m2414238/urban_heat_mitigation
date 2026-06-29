import os 
import glob # using to find simmilar name or extension file 
import pandas as pd


def _merger_csv (): 
    # base directory for the project 
    current_dir = os.getcwd()

    target_dir = os.path.join(current_dir, "datasetcsv")
    if not os.path.exists(target_dir):
        target_dir = current_dir 

    search_pattern = os.path.join(target_dir, "*.csv")
    csv_files =glob.glob(search_pattern)

    if not csv_files:
        print("No csv file found under : ", target_dir)
        return None 
    
    # keeping main mergerd file away
    mergerd_file = "Mergerd_ML_DATASET.csv" 
    csv_files =[f for f in csv_files if os.path.basename(f) != mergerd_file]


    if not csv_files:
        print("No CSV files found (excluding the merged file).")
        return 

    print(f"Found {len(csv_files)} individual CSV files to merge:")
    for file_name in csv_files:
        print(f"- {os.path.basename(file_name)}")

    df_list = []   # list to store 
    for file_path in csv_files: # file in csv file means picking each csv file path one by one 
        df = pd.read_csv(file_path) # using pandas to read csv 
        df_list.append(df)

    merged_df = pd.concat(df_list,  ignore_index=True)
    
    # output file path
    output_path = os.path.join(target_dir, mergerd_file)
    
    # mergerd file into csv file  
    merged_df.to_csv(output_path, index=False)
    print(f"\nSuccessfully merged files into {output_path}")
    print(f"Merged dataset shape: {merged_df.shape}")

if __name__ == "__main__":
    _merger_csv ()
