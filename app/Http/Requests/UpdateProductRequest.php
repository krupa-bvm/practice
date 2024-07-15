<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Product;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
{
    return [
        'name' => ['required', 'string', 'max:255'],
        'detail' => ['required', 'string', 'max:255'],
        'images.*' => ['nullable', 'image', 'mimes:jpeg,png,jpg,gif', 'max:2048'], // Validation for multiple images
    ];
}

public function messages(): array
{
    return [
        'name.required' => 'Please enter a name.',
        'name.string' => 'The name must be a string.',
        'name.max' => 'The name may not be greater than 255 characters.',
        'detail.required' => 'Please enter a detail.',
        'detail.max' => 'The detail may not be greater than 255 characters.',
        'images.*.image' => 'Each file must be an image.',
        'images.*.mimes' => 'Each image must be a file of type: jpeg, png, jpg, gif.',
        'images.*.max' => 'Each image may not be greater than 2048 kilobytes.',
    ];
}

public function updateProduct(Product $product)
{
    $validated = $this->validated();

    if ($this->hasFile('images')) {
        $images = [];
        foreach ($this->file('images') as $file) {
            $path = $file->store('images', 'public');
            $images[] = $path;
        }
        $product->images = array_merge($product->images ?? [], $images);
    }

    $product->name = $validated['name'];
    $product->detail = $validated['detail'];

    if ($product->save()) {
        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    } else {
        return redirect()->back()->with('error', 'Something went wrong while updating the product.');
    }
}

}
