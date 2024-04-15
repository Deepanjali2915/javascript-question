function remove(productId) {
    const index = inventory.findIndex(product => product.id === productId);
        inventory.splice(index,1);
}
