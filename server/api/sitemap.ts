import api from '@/axios'
export default defineSitemapEventHandler(async (e) => {
    let coreResult = [];
    // get admin posts
    const adminPosts = await api.get("/sitemap/admin-posts")
    if(adminPosts.data.status == 200) {
        if(adminPosts.data.result.length != 0) {
            coreResult = [...coreResult , ...adminPosts.data.result]
        }
    }

    // get user posts
    const userPosts = await api.get("/sitemap/user-posts")
    if(userPosts.data.status == 200) {
        if(userPosts.data.result.length != 0) {
            coreResult = [...coreResult , ...userPosts.data.result]
        }
    }

    // get categories
    const categories = await api.get("/sitemap/categories")
    if(categories.data.status == 200) {
        if(categories.data.result.length != 0) {
            coreResult = [...coreResult , ...categories.data.result]
        }
    }

    // get tags
    const tags = await api.get("/sitemap/tags")
    if(tags.data.status == 200) {
        if(tags.data.result.length != 0) {
            coreResult = [...coreResult , ...tags.data.result]
        }
    }

    // get users
    const users = await api.get("/sitemap/users")
    if(users.data.status == 200) {
        if(users.data.result.length != 0) {
            coreResult = [...coreResult , ...users.data.result]
        }
    }

    return [...coreResult].map((p) => {
      return {
        loc: p._path,
        lastmod: p.modifiedAt,
      };
    });
  });
  