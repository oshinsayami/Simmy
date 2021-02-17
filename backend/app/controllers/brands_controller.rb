class BrandsController < ApplicationController
    def index
        brands = Brand.all
        options = {include: [:products]}
        render json: BrandSerializer.new(brands, include: [:products])
    end
end
