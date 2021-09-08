var deleteNode = function(root, key) {
    if(!root) return null
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {    
        if(!root.left){
            return root.right
        } else if(!root.right){
            return root.left
        } else {
            let curr = getMinValueNode(root.right)
            root.val = curr.val
            root.right = deleteNode(root.right, root.val)
        }
    }
  return root
};

var getMinValueNode = function(root) {
    while(root.left){
        root = root.left
    }
    return root
}
