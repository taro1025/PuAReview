if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: '_PuAReview', domain: 'pua-review-frontend.s3-website-ap-northeast-1.amazonaws.com'
else
    Rails.application.config.session_store :cookie_store, key: '_PuAReview'
end
