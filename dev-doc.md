### Development Documentation

1. **Tailwind CSS Integration**

   - Leveraged Tailwind CSS for utility-first styling
   - Eliminated the need for separate CSS files

2. **Environment Configuration**

   - Configured OMDB API key in `src/app/environments/environment.ts`
   - Provided `environment.template.ts` as reference
   - Reference: [Angular Environment Configuration](https://v17.angular.io/guide/build#configure-environment-specific-defaults)

3. **Route Optimization**

   - Implemented lazy loading using `loadComponent` approach
   - Improved initial load performance

4. **Data Persistence**

   - Utilized localStorage for watchlist management
   - Suitable solution for demo applications

5. **Code Refactoring**

   - Extracted shared movie display logic into:
     - `movie-card` component
     - `movie-list` component
   - Differentiated only by action buttons between home and watchlist views

6. **UX Enhancements**

   - Preserved search terms in URL for better navigation experience
   - Added confirmation dialog for watchlist removal actions

7. **Testing**
   - Due to time constraints and limited feature scope, manual testing was employed instead of e2e/integration/unit tests 😅
