import { Component } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { category } from '../types/category';
import { blog } from '../types/blogs';

@Component({
  selector: 'app-add-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-blogs.component.html',
  styleUrl: './add-blogs.component.css'
})
export class AddBlogsComponent {
  title: string = '';
  content: string = ''; description: string ="";
  categories: any = []; // Array to hold categories
  selectedCategoryId: number = 1; // Variable to hold selected

  constructor(
    private blogPostService: CustomServiceService,
    private router: Router
  ) {
    this.loadCategories();
  }

  loadCategories() {
    this.blogPostService.getAllCategoryData().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      },
    });
  }

  image: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0]; // Assign the first file from the FileList
    }
  }

  onSubmit() {
    const newPost: any = {
      id: 0,
      blogTitle: this.title,
      content: this.content,
      description: this.description,
      image: "this.image",
      isFeatured: true,
      categoryId: this.selectedCategoryId,
    };
    this.blogPostService.createBlogPost(newPost).subscribe({
      next: () => {
        this.router.navigate(['/blogs']);
      },
      error: (err) => {
        console.error('Failed to create blog', err);
      },
    });
   }
}
