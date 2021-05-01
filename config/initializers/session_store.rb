if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_PuAReview', domain: '52.193.23.14'
else
    Rails.application.config.session_store :cookie_store, key: '_PuAReview'
end
