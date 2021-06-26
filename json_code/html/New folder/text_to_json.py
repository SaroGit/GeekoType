import json 
filename = 'ex.txt'
dict1 = {} 
fh=open(filename)
l=1
count=0
file=1
for line in fh:
    l_no='line'+str(l)
    dict1[l_no]=line
    l+=1
    count+=1
    if count==8:
        count=0
        l=1
        output_filename='json_'+(filename.split('.')[0])+str(file)+'.json'
        output_file=open(output_filename,'w')
        json.dump(dict1, output_file, indent=4)
        file+=1
        dict1.clear()

output_file.close()
  
