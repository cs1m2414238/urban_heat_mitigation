import os
import pandas as pd


def compare_csv_files(file_path1 ,file_path2):
    if not os.path.exists(file_path1) or not os.path.exists(file_path2):
        print(f"ERROR: One or both files do not exist")
    

    # loading both files 
    df1 = pd.read_csv(file_path1)   
    df2 = pd.read_csv(file_path2)


    # checking that the csv file are exact same or not 
    if df1.equals(df2):
        print(f"SUCCESS: The two CSV files are exactly the same.")
        return True
    
    else:
        print(f"The two CSV files are different.")
        return False
    
def compare_csv_shape(file_path1,file_path2 ):
    
    df1 = pd.read_csv(file_path1)   
    df2 = pd.read_csv(file_path2)
    if df1.shape != df2.shape:
        print(f"ERROR: Files have different shapes.")
        return False
    
    if df1.columns != df2.columns:
        print(f"ERROR: Files have different columns.")
        return False
    

if __name__ == "__main__":
    # Put the paths to your two CSV files here
    file_a = "Mergerd_ML_DATASET.csv"
    file_b = "Mergerd_ML_Dataset.csv"

    compare_csv_files(file_a, file_b )
    compare_csv_shape(file_a, file_b)