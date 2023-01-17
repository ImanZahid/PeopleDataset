var MaxSize=0;
var Occurances=[];
var Frequency=[];
var MostFavorites=[];
for(var i=0; i<people.length; i++)
{
    var InnerLength=people[i].favorites.length;
    var id= people[i].id;
    Occurances.push(id);
     
    if(MaxSize<InnerLength)
    {
        MaxSize=InnerLength;
    }
   
}

    for(var k=0; k<people.length; k++)
    {
        Frequency[k]=0;
        for(var i=0; i<people.length; i++)
        {
           for(var j=0; j<people[i].favorites.length; j++)
           {
               if(Occurances[k]==people[i].favorites[j])
               {
                Frequency[k]=Frequency[k]+1;
               }
           }
        }
    }

    var maxIndex=0;
    var maxValue=0;
for(var i=1; i<people.length; i++)
{
    if(Frequency[maxIndex]<Frequency[i])
    {
        maxIndex=i;
        maxValue=Frequency[maxIndex];

    }
}

for(var p=0; p<people.length; p++)
{
    if(maxValue==Frequency[p])
    {
        MostFavorites.push(p);
    }
}