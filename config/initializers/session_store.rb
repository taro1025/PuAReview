if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_PuAReview', domain: 'フロントエンドのドメイン'
else
    Rails.application.config.session_store :cookie_store, key: '_PuAReview'
end
