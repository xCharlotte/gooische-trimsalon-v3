<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Blog::insert([
            [
                'title' => 'Blogpost 1',
                'slug' => 'blogpost-1',
                'category' => 'Nieuws',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/neo_banana/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 2',
                'slug' => 'blogpost-2',
                'category' => 'Katten',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/bella/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 3',
                'slug' => 'blogpost-3',
                'category' => 'Honden',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/bella/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 4',
                'slug' => 'blogpost-4',
                'category' => 'Klitten',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/millie_neo/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 5',
                'slug' => 'blogpost-5',
                'category' => 'Emmi Pet',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/bella/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 6',
                'slug' => 'blogpost-6',
                'category' => 'Nieuws',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/neo/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 7',
                'slug' => 'blogpost-7',
                'category' => 'Katten',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/bella/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 8',
                'slug' => 'blogpost-8',
                'category' => 'Honden',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/neo/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 9',
                'slug' => 'blogpost-9',
                'category' => 'Katten',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/millie_neo/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 10',
                'slug' => 'blogpost-10',
                'category' => 'Katten',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/neo_banana/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 11',
                'slug' => 'blogpost-11',
                'category' => 'Nieuws',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/millie_neo/300/200',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Blogpost 12',
                'slug' => 'blogpost-12',
                'category' => 'Honden',
                'content' => 'Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human.',
                'image' => 'https://placecats.com/millie/300/150',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
