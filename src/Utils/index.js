/* eslint-disable import/prefer-default-export */

// on fait un export nommé parce qu'on prévoit d'avoir d'autres fonctions à
// exporter dans se fichier

// JSDoc : mode d'emploi de la fonction

/**
 * Get the posts for a category, all posts if the category is 'Accueil'
 * @param {Array} postsData All the posts
 * @param {String} categoryName The category to look for
 * @return the posts for the category
 */
export const getPostsByCategory = (postsData, categoryName) => {
  let result = postsData;

  if (categoryName !== 'Accueil') {
    result = postsData.filter((post) => post.category === categoryName);
  }

  return result;
};
