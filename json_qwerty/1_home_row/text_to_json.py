import json 
  
  
filename = 'ex7.txt'
  
dict1 = {} 
 
  
with open(filename) as fh:
    l=1
    for line in fh:
        l_no='line'+str(l)
        dict1[l_no]=line
        l+=1

output_filename='json_'+(filename.split('.')[0])+'.json'

output_file=open(output_filename,'w')

json.dump(dict1, output_file, indent=4)

output_file.close()
  
