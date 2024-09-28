require_relative "boot"
require "rails/all"
Bundler.require(*Rails.groups)

module Mysite
  class Application < Rails::Application
    config.load_defaults 7.2
    config.autoload_lib(ignore: %w[assets tasks])
    config.assets.paths << Rails.root.join("app", "assets", "builds")
  end
end
