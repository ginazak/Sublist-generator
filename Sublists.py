def sublist(l):
    """ Generates all possible sublists of a given list.
    Code ignores any sublists that contain originally non-neighbouring elements at adjacent indexes.
    Output is an array with nested arrays (sublists). 
    """

    # Master list containing initial empty sublist   
    final_list = [[]]

    # Outer loop initiated to iterate over all elements in given list atleast once    
    for i in range(len(l) + 1):
        # Inner loop initiated with fixed offset from outer loop, 
        # All possible sublists for each element controlled by outer loop        
        for j in range(i + 1, len(l) + 1):
            temp = l[i:j]
            final_list.append(temp)
    return final_list