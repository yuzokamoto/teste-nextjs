export const goToHomePage = (router) => {
  router.push("/");
};

export const goToSignupPage = (router) => {
  router.push("/signup");
};

export const goToLoginPage = (router) => {
  router.push("/login");
};

export const goToDetailsPage = (router, recipeId) => {
  router.push(`/recipe/${recipeId}`);
};

export const goToCreateRecipePage = (router) => {
  router.push("/recipe/new");
};
