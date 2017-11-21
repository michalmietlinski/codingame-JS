n = int(input())
j=0;
st=10000000000000
p1=0
p2=0
pi=[]
for i in range(n):
    
    pi.append(int(input()))
    
pi.sort()
for j in range(n-1):
    # print(j)
    if math.fabs(pi[j]-pi[j+1])<st:
        st=int(math.fabs(pi[j]-pi[j+1]));
        p1=j;
        p2=j+1;
# Write an action using print
# To debug: print("Debug messages...", file=sys.stderr)

print(st)